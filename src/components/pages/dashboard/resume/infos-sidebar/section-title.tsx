import type { LucideIcon } from 'lucide-react'

type SectionTitleProps = {
  title: string
  icon: LucideIcon
}

export const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size={18} className="text-muted-foreground" />
      <h3 className="text-2xl font-title font-bold">{title}</h3>
    </div>
  )
}
