import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaTumblr,
  FaLinkedinIn,
  FaPinterest
} from 'react-icons/fa'

const getIcon = icon => {
  switch (icon) {
    case 'Apple':
      return FaApple
    case 'Facebook':
      return FaFacebookF
    case 'Instagram':
      return FaInstagram
    case 'Soundcloud':
      return FaSoundcloud
    case 'Spotify':
      return FaSpotify
    case 'Twitter':
      return FaTwitter
    case 'YouTube':
      return FaYoutube
    case 'Tiktok':
      return FaTiktok;
    case 'Tumblr':
      return FaTumblr;
    case 'LinkedIn':
      return FaLinkedinIn;
    case 'Pinterest':
      return FaPinterest
    default:
      return false
  }
}

export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false
  },
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'Apple', value: 'Apple' },
          { title: 'Facebook', value: 'Facebook' },
          { title: 'Instagram', value: 'Instagram' },
          { title: 'Soundcloud', value: 'Soundcloud' },
          { title: 'Spotify', value: 'Spotify' },
          { title: 'Twitter', value: 'Twitter' },
          { title: 'YouTube', value: 'YouTube' },
          { title: 'Tiktok', value: 'Tiktok' },
          { title: 'Tumblr', value: 'Tumblr' },
          { title: 'LinkedIn', value: 'LinkedIn' },
          { title: 'Pinterest', value: 'Pinterest' },
        ]
      }
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    }
  ],
  preview: {
    select: {
      icon: 'icon',
      url: 'url'
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url ? url : '(url not set)',
        media: getIcon(icon)
      }
    }
  }
}
