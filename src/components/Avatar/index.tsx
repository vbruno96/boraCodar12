interface AvatarProps {
  imageUrl: string
}

export function Avatar({ imageUrl }: AvatarProps) {
  return <img src={imageUrl} alt="" className="avatar" />
}
