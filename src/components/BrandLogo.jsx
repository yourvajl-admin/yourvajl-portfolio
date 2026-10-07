import { SiMeta, SiGmail, SiGoogledocs, SiGooglesheets, SiFacebook, SiTiktok, SiInstagram, SiShopify } from 'react-icons/si'
import { FaSlack } from 'react-icons/fa6'

const brandIcons = { meta: SiMeta, slack: FaSlack, gmail: SiGmail, docs: SiGoogledocs, sheets: SiGooglesheets, facebook: SiFacebook, tiktok: SiTiktok, instagram: SiInstagram, shopify: SiShopify }

export default function BrandLogo({ brand, className = '' }) {
  const Icon = brandIcons[brand]
  const label = {
    meta: 'Meta Business Suite', slack: 'Slack', gmail: 'Gmail', docs: 'Google Docs',
    sheets: 'Google Sheets', facebook: 'Facebook', tiktok: 'TikTok',
    instagram: 'Instagram', shopify: 'Shopify', canva: 'Canva',
  }[brand]
  if (Icon) return <span className={'brand-logo brand-' + brand + ' ' + className} role="img" aria-label={label}><Icon aria-hidden="true" focusable="false" /></span>
  if (brand === 'canva') return <span className={'brand-logo brand-canva ' + className} role="img" aria-label="Canva"><img src="/tool-logos/canva.svg" alt="" draggable="false"/></span>
  return null
}
