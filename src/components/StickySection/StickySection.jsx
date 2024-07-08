import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import SobreNosotros from './SobreNosotros/SobreNosotros'
import Video from '../Video/Video'
import { DirectionAwareHover } from '../../aceternity/ui/direction-aware-hover'

export default function StickySection() {
    return (
      <div className="relative isolate overflow-hidden bg-white px-6 my-10 sm:my-[-10rem] sm:mx-[6rem] sm:ml-[8rem] lg:overflow-visible lg:px-0 lg:my-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
           
                <h1 className="mt-2 text-3xl montserrat tracking-tight text-gris-oscuro sm:text-4xl">¿Quienes Somos?</h1>
                <p className="mt-6 sm:text-xl leading-8 text-gray-700 montserrat">
                Con mas de 50 años de experiencia, CrenAgro fue creada para apoyar a dueños y trabajadores del campo.
                A lo largo de los años, hemos crecido con éxito, manteniendo la lealtad de nuestros clientes antiguos y ganando la confianza de las nuevas generaciones.

                </p>
              </div>
            </div>
          </div>
          <div className=" -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:ml-[-6rem]">
       <SobreNosotros/>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"> 
                <h2 className="mt-[-2rem] text-3xl sm:text-4xl font-bold tracking-tight text-gris-oscuro montserrat">Porque Elegirnos</h2>
                <p className="mt-6 sm:text-xl montserrat">
              
                Nuestro equipo se destaca por su carisma, respeto y la confianza que 
                establecemos con nuestros clientes, el trato con cada uno de ellos  
                es por medio de los propios dueños de la empresa lo que garantiza un vínculo real.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }