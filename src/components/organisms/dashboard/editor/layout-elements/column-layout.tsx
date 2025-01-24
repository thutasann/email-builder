import { DragLayoutProps } from '@/core/types/email-template.type'

type ColumnLayoutProps = {
  layout: DragLayoutProps
}

/**
 * Column Layout
 * - Layout for Columns
 */
function ColumnLayout({ layout }: ColumnLayoutProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${layout?.numOfCol}, 1fr)`,
        gap: '0px',
      }}
    >
      {Array.from({ length: layout?.numOfCol }).map((_, index) => (
        <div
          key={index}
          className='p-2 bg-slate-200 border border-dashed border-slate-400 flex items-center justify-center'
        >
          {index + 1}
        </div>
      ))}
    </div>
  )
}

export default ColumnLayout
