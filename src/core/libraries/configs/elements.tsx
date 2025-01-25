import { Element } from '@/core/types/element.type'
import {
  Frame,
  Image,
  PanelTop,
  RectangleEllipsis,
  SquareSplitVertical,
  TextSelectionIcon,
  Twitter,
} from 'lucide-react'

/**
 * Elements
 */
export const elements: Element[] = [
  {
    icon: RectangleEllipsis,
    label: 'Button',
    type: 'Button',
    content: 'Sample Button',
    url: '#',
    style: {
      textAlign: 'center',
      backgroundColor: '#007bff',
      color: '#ffffff',
      padding: '8px',
      width: 'auto',
      fontSize: '14px',
      borderRadius: '3px',
      fontWeight: 'normal',
      objectFit: 'contain',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  {
    icon: TextSelectionIcon,
    type: 'Text',
    label: 'Text',
    textarea: 'Sample Text',
    style: {
      backgroundColor: '',
      color: '#000000',
      padding: '10px',
      textAlign: 'center',
      fontSize: '16px',
      fontWeight: 'normal',
      textTransform: 'uppercase', //lowercase , capitilized
    },
    outerStyle: {
      backgroundColor: '#fff',
      width: '100%',
    },
  },
  {
    icon: Image,
    type: 'Image',
    label: 'Image',
    imageUrl: '/placeholder.png',
    alt: 'Image',
    url: '#',
    style: {
      backgroundColor: '',
      padding: '0px',
      height: '50%',
      width: '70%',
      margin: '0px',
      borderRadius: '0px',
    },
    outerStyle: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '',
    },
  },
  {
    icon: Frame,
    type: 'Logo',
    label: 'Logo',
    imageUrl: '/logo.png',
    alt: 'logo',
    url: '#',
    style: {
      backgroundColor: '',
      padding: '0px',
      height: '30%',
      width: '30%',
      margin: '0px',
      borderRadius: '0px',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '',
      width: '100%',
    },
  },
  {
    icon: PanelTop,
    type: 'LogoHeader',
    label: 'Logo Header',
    imageUrl: '/logo.svg',
    alt: 'logo',
    url: '#',
    style: {
      backgroundColor: '#ffffff',
      padding: '10px',
      height: '40%',
      width: '100%',
      borderRadius: '0px',
      fontSize: '24px',
      color: '#000000',
    },
    outerStyle: {
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
    },
  },
  {
    icon: SquareSplitVertical,
    type: 'Divider',
    label: 'Divider',
    content: '',
    style: {
      color: '#efefef',
      padding: '0px',
      width: '100%',
    },
  },
  {
    type: 'SocialIcons',
    icon: Twitter,
    label: 'Social Icons',
    socialIcons: [
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        url: '',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
        url: '',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
        url: '',
      },
    ],
    options: [
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        url: '',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
        url: '',
      },
      {
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
        url: '',
      },
    ],
    style: {
      width: 40,
      height: 40,
    },
    outerStyle: {
      display: 'flex',
      gap: 15,
    },
  },
]
