import React from 'react'
import { CheckCircle, Lock, LockKey } from "phosphor-react";
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}


export function Lesson({
  title,
  availableAt,
  slug,
  type
}: LessonProps) {

  const isLessonAvailable = isPast(availableAt);
  const availbleDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM ' • 'k'h'mm", {
    locale: ptBR
  }).charAt(0).toUpperCase()

  return (
    <a href='#'>
      <span className='text-gray-300'>
        {availbleDateFormat}
      </span>

      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {
            isLessonAvailable ? (
              <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
                <CheckCircle size={20} />
                Conteúdo Liberado
              </span>
            ) : (
              <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
                <Lock size={20} />
                Em breve
              </span>
            )
          }


          <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'} 
          </span>
        </header>

        <strong className='font-gray-200 mt-5 block'>
          {title}
        </strong>
      </div>
    </a>
  )
}