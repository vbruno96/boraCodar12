import { AvatarContanier } from './styles'

interface AvatarProps {
  imageUrl: string
}

export function Avatar({ imageUrl }: AvatarProps) {
  return <AvatarContanier src={imageUrl} alt="" />
}
