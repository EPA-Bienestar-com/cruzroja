import { useMedplumProfile } from '@medplum/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { GiftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import { formatHumanName } from '@medplum/core';
import HealthVisitImage from '../img/homePage/health-visit.jpg';
import { ReactComponent as TaskIcon } from '../img/homePage/task-icon.svg';
import { ReactComponent as HealthRecordImage } from '../img/homePage/health-record.svg';
import { ReactComponent as PillImage } from '../img/homePage/pill.svg';
import { ReactComponent as PharmacyImage } from '../img/homePage/pharmacy.svg';
import { ReactComponent as DoctorImage } from '../img/homePage/doctor.svg';
import { Patient, Practitioner } from '@medplum/fhirtypes';

const carouselItems = [
  {
    img: <TaskIcon />,
    title: 'Prevención HTA ENT',
    description:
      'Las Enfermedades Cardiovasculares, Diabetes Tipo II, algunos tipos de cáncer y EPOC. Se pueden prevenir controlando sus factores de riesgo',
    url: '/get-care',
    label: 'Factores de Riesgo',
  },
  {
    img: <TaskIcon />,
    title: 'Verificar Email',
    description:
      'Queremos ofrecer un servicio simple y muy efectivo. Es por eso que nos preocupa comunicarnos satisfactoriamente con nuestros usuarios',
    url: '/account',
    label: 'Enviar mail de verificación',
  },
  {
    img: <TaskIcon />,
    title: 'Seleccione Profesional',
    description:
      'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
    url: '/account/provider/choose-a-primary-care-povider',
    label: 'Seleccione un proveedor de atención primaria',
  },
  {
    img: <TaskIcon />,
    title: 'Contacto de Emergencia',
    description:
      'Lorem ipsum at porta donec ultricies ut, arcu morbi amet arcu ornare, curabitur pharetra magna tempus',
    url: '/account',
    label: 'Agregar un contacto de Emergencia',
  },
];

const linkPages = [
  {
    img: <HealthRecordImage className="h-auto w-24" />,
    title: 'Registros Salud',
    description: 'Registros Electrónicos Médicos',
    href: '/health-record',
  },
  {
    img: <PillImage className="h-auto w-24" />,
    title: 'Request Prescription Renewal',
    description: '',
    href: '/health-record/medications',
  },
  {
    img: <PharmacyImage className="h-auto w-24" />,
    title: 'Farmacia Auto-Asignada',
    description: 'Farmacia Danesa. Cabildo 2171. Belgrano. CABA.',
    href: '#',
  },
];

const recommendations = [
  {
    title: 'Get travel health recommendations',
    description: 'Find out what vaccines and meds you need for your trip.',
  },
  {
    title: 'Get FSA/HSA reimbursement',
    description: 'Request a prescription for over-the-counter items.',
  },
  {
    title: 'Request health record',
    description: 'Get records sent to or from Foo Medical.',
  },
];

export function HomePage(): JSX.Element {
  const profile = useMedplumProfile() as Patient | Practitioner;
  const profileName = profile.name ? formatHumanName(profile.name[0]) : '';

  return (
    <div>
      <Header />
      <div className="flex justify-center bg-red-100 py-4 px-6 text-sm text-neutral-600">
        <span>
          Teleconsulta:{' '}
          <a href="https://calendar.app.google/JWYcJXgaS7xTE8QS7" className="font-medium text-red-600">
            Solicitar turno on line!
          </a>
        </span>
      </div>
      <div className="bg-hero-background bg-cover bg-left-top">
        <section className="mx-auto max-w-7xl px-6 shadow-2xl sm:px-4 md:shadow-none lg:px-8">
          <div className="py-20">
            <div className="flex flex-col items-start md:w-128 lg:w-156">
              <p className="max-w-xs text-1xl sm:text-2xl md:max-w-none md:text-3xl lg:text-4xl">
                Hola <span className="text-red-600">{profileName}</span></p>
              <Button url="/health-record/vitals/blood-pressure" label="Ingresar nuevos datos de salud" marginsUtils="m-0 mt-8" paddingUtils="px-10 py-4" fontUtils="medium"/>
            </div>
          </div>2
        </section>
      </div>
      <div className="flex w-full justify-center bg-red-900 py-4 px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center space-y-4 font-medium text-white md:flex-row md:space-y-0 md:space-x-6">
          <GiftIcon className="h-10 w-10 stroke-1 text-white" />
          <p>¿Cómo te va?</p>
          <Button
            label="Enviar Mensaje"
            url="/messages"
            marginsUtils="m-0"
            paddingUtils="px-10 py-4"
            fontUtils="medium"
          />
        </div>
      </div>
      <div className="w-full bg-gray-50">
        <section className="mx-auto max-w-7xl px-2 pb-10 sm:px-4 md:pt-6 md:pb-20 lg:px-8">
          <Carousel items={carouselItems} />
          <div className="relative mt-6 flex w-full flex-col items-center justify-center space-y-4 rounded-md bg-white p-4 shadow sm:justify-start md:flex-row md:items-start md:space-x-4 md:space-y-0">
            <TaskIcon className="flex-none" />
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4 text-center md:text-left">
                <h2 className="mb-4 text-lg font-medium text-gray-900">Better rest, better health</h2>
                <p className="text-base font-medium text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
              <Button label="Invite Friends" url="#" marginsUtils="m-0" paddingUtils="px-10 py-4" fontUtils="medium" />
              <a href="#" className="absolute top-4 right-4">
                <XMarkIcon className="h-auto w-6 cursor-pointer stroke-1 text-gray-900" />
              </a>
            </div>
          </div>
          <div className="relative mt-10 flex w-full flex-col items-center justify-center rounded-md bg-white shadow md:flex-row md:justify-start">
            <div className="relative h-56 w-full md:h-60">
              <img
                className="absolute inset-0 h-full w-full rounded-t-md rounded-b-none object-cover md:rounded-r-none md:rounded-l-md"
                src={HealthVisitImage}
                alt="Health visit photo"
              />
            </div>
            <div className="flex w-full max-w-[626px] flex-none flex-col items-center justify-center p-4 md:items-start md:justify-start">
              <div className="rounded bg-red-100 py-1 px-3">
                <h3 className="text-base font-medium uppercase text-red-600">Now available</h3>
              </div>
              <div className="text-center md:text-left">
                <h2 className="my-4 text-lg font-medium text-gray-900">Title</h2>
                <p className="text-base font-medium text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
            <a href="#" className="absolute top-4 right-4 h-8">
              <XMarkIcon className="h-auto w-6 stroke-1 text-white md:text-gray-900" />
            </a>
          </div>
          <div className="mt-10 flex w-full flex-col justify-center space-y-4 text-lg md:flex-row md:items-stretch md:space-y-0 md:space-x-4">
            {linkPages.map(({ href, img, title, description }) => (
              <a
                key={title}
                href={href}
                className="flex h-auto w-full flex-col items-center justify-center space-y-4 rounded-md bg-white p-4 text-center shadow"
              >
                {img}
                <div className="flex flex-col justify-center md:h-1/2">
                  <h2 className="text-lg font-medium text-gray-900">{title}</h2>
                  {description && <p className="text-base font-medium text-gray-500">{description}</p>}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 flex w-full flex-col justify-center space-y-6 md:flex-row md:justify-start md:space-y-0 md:space-x-6">
            <div className="flex w-full flex-col items-center space-y-4 rounded-md bg-white p-4 shadow md:w-2/4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
              <DoctorImage className="h-auto w-24 flex-none rounded-full" />
              <div className="flex h-full flex-col items-center text-center md:items-start md:text-left">
                <h2 className="mb-4 text-lg font-medium text-gray-900">Primary Care Provider</h2>
                <p className="mb-4 text-base font-medium text-gray-500">
                  Having a consistent, trusted provider can lead to better health.
                </p>
                <Button
                  label="Choose Provider"
                  url="#"
                  marginsUtils="m-0"
                  paddingUtils="px-10 py-4"
                  fontUtils="medium"
                />
              </div>
            </div>
            <div className="w-full rounded-md border bg-white text-sm shadow md:w-2/4">
              {recommendations.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="block border-gray-200 p-4 text-center even:border-y md:text-left"
                >
                  <h2 className="text-lg font-medium text-gray-900">{item.title}</h2>
                  <p className="text-base font-medium text-gray-500">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
