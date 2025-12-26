import React from 'react'
import type { Preview } from '@storybook/react'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#181411',
        },
        {
          name: 'light',
          value: '#F8F7F5',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <div className="bg-background-dark p-8">
          <Story />
        </div>
      </div>
    ),
  ],
}

export default preview
