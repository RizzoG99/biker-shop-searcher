import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '@/components/ui/atoms/Button'

const meta: Meta<typeof Modal> = {
  title: 'UI/Atoms/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A fully accessible modal dialog with portal rendering, focus trap, and keyboard navigation. Features ESC key support, backdrop click to close, and body scroll lock.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls modal visibility',
    },
    size: {
      control: 'select',
      options: ['default', 'large', 'fullscreen'],
      description: 'Modal size variant',
    },
    title: {
      control: 'text',
      description: 'Modal title displayed in header',
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle below title',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: 'Allow closing by clicking backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Allow closing with ESC key',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show X close button in header',
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

/**
 * Wrapper component to manage modal state for stories
 */
function ModalStory(props: Omit<React.ComponentProps<typeof Modal>, 'isOpen' | 'onClose'>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...props} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

/**
 * Default modal with minimal configuration
 */
export const Default: Story = {
  render: () => (
    <ModalStory>
      <div className="space-y-4">
        <p className="text-text-secondary">
          This is a basic modal with default settings. Click outside or press ESC to close.
        </p>
        <p className="text-text-secondary">
          The modal will automatically trap focus and restore it when closed.
        </p>
      </div>
    </ModalStory>
  ),
}

/**
 * Modal with title and subtitle
 */
export const WithHeader: Story = {
  render: () => (
    <ModalStory
      title="Edit Outfit Filters"
      subtitle="Customize your gear recommendations based on riding style and budget"
    >
      <div className="space-y-4">
        <p className="text-text-secondary">
          This modal demonstrates the header section with a title and descriptive subtitle.
        </p>
        <div className="space-y-2">
          <label className="block text-sm text-text-secondary">Riding Style</label>
          <select className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white">
            <option>Sport Touring</option>
            <option>Adventure</option>
            <option>Track</option>
          </select>
        </div>
      </div>
    </ModalStory>
  ),
}

/**
 * Modal with action buttons in footer
 */
export const WithFooter: Story = {
  render: () => {
    const Footer = () => (
      <>
        <Button variant="ghost">Cancel</Button>
        <Button variant="primary">Apply Changes</Button>
      </>
    )

    return (
      <ModalStory
        title="Confirm Action"
        subtitle="This action cannot be undone"
        footer={<Footer />}
      >
        <p className="text-text-secondary">
          Are you sure you want to proceed? This will apply your changes immediately.
        </p>
      </ModalStory>
    )
  },
}

/**
 * Large modal for more content
 */
export const Large: Story = {
  render: () => (
    <ModalStory
      title="Large Modal"
      subtitle="Perfect for complex forms or detailed content"
      size="large"
    >
      <div className="space-y-4">
        <p className="text-text-secondary">
          This modal uses the "large" size variant (max-width: 3xl) to accommodate more content.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-text-secondary mb-2">First Name</label>
            <input
              type="text"
              className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-2">Last Name</label>
            <input
              type="text"
              className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white"
              placeholder="Enter last name"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-text-secondary mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white"
              placeholder="Enter email"
            />
          </div>
        </div>
      </div>
    </ModalStory>
  ),
}

/**
 * Fullscreen modal for maximum space
 */
export const Fullscreen: Story = {
  render: () => (
    <ModalStory
      title="Fullscreen Modal"
      subtitle="Uses 95% of viewport width and height"
      size="fullscreen"
    >
      <div className="space-y-4 h-full">
        <p className="text-text-secondary">
          This modal takes up almost the entire viewport, perfect for complex interfaces or media viewing.
        </p>
        <div className="h-64 bg-background-dark rounded-lg flex items-center justify-center">
          <p className="text-text-secondary">Large content area</p>
        </div>
      </div>
    </ModalStory>
  ),
}

/**
 * Modal without close button
 */
export const NoCloseButton: Story = {
  render: () => (
    <ModalStory
      title="Important Notice"
      showCloseButton={false}
      footer={
        <Button variant="primary" onClick={() => {}}>
          I Understand
        </Button>
      }
    >
      <p className="text-text-secondary">
        This modal requires explicit user action. The close button is hidden and backdrop/ESC
        closing is disabled.
      </p>
    </ModalStory>
  ),
}

/**
 * Modal that only closes with explicit action
 */
export const NoAutoClose: Story = {
  render: () => (
    <ModalStory
      title="Required Action"
      subtitle="Please review and confirm"
      closeOnBackdrop={false}
      closeOnEscape={false}
      footer={
        <>
          <Button variant="ghost">Decline</Button>
          <Button variant="primary">Accept</Button>
        </>
      }
    >
      <div className="space-y-4">
        <p className="text-text-secondary">
          This modal cannot be closed by clicking the backdrop or pressing ESC. Users must click
          one of the action buttons.
        </p>
        <p className="text-text-secondary">
          This is useful for critical actions that require explicit user confirmation.
        </p>
      </div>
    </ModalStory>
  ),
}

/**
 * Modal with scrollable content
 */
export const ScrollableContent: Story = {
  render: () => (
    <ModalStory title="Terms and Conditions" subtitle="Please read carefully">
      <div className="space-y-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        ))}
      </div>
    </ModalStory>
  ),
}

/**
 * Modal with form focus management
 */
export const FormExample: Story = {
  render: () => (
    <ModalStory
      title="Add New Item"
      subtitle="Enter item details below"
      footer={
        <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="primary">Add Item</Button>
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-text-secondary mb-2">
            Item Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Enter item name"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-2">Category</label>
          <select className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
            <option>Helmet</option>
            <option>Jacket</option>
            <option>Gloves</option>
            <option>Boots</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-text-secondary mb-2">Description</label>
          <textarea
            className="w-full bg-card-dark border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            rows={4}
            placeholder="Enter description"
          />
        </div>
      </div>
    </ModalStory>
  ),
}
