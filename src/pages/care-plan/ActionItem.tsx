import { Fragment } from 'react';
import { CarePlan, Reference, RequestGroup } from '@medplum/fhirtypes';
import { CodeableConceptDisplay, RequestGroupDisplay, useMedplum } from '@medplum/react';
import { useParams } from 'react-router-dom';
import InfoSection from '../../components/InfoSection';
import LinkToPreviousPage from '../../components/LinkToPreviousPage';
import getLocaleDate from '../../helpers/get-locale-date';
import './ActionItem.css';

export default function ActionItem(): JSX.Element {
  const medplum = useMedplum();
  const { itemId = '' } = useParams();

  const resource: CarePlan = medplum.readResource('CarePlan', itemId).read();

  return (
    <>
      <LinkToPreviousPage url="/care-plan/action-items" label="Todos los elementos" styles="mb-5" />
      <InfoSection title="Detalles">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center space-x-3 border-b border-gray-200 pb-5">
            <div className="flex-shrink-0">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                <span className="font-medium leading-none text-amber-400">MT</span>
              </span>
            </div>
            <div>
              <div className="text-sm text-gray-700">
                <p>Solicitado por el Equipo</p>
              </div>
              {resource.period?.end && (
                <div className="mt-1 text-sm font-bold text-gray-900">
                  <p>Esperado para el {getLocaleDate(resource.period.end)}</p>
                </div>
              )}
            </div>
          </div>
          <div className="space-y-5 pt-5">
            {resource.activity &&
              resource.activity.map((activity, activityIndex) => {
                return (
                  <Fragment key={activityIndex}>
                    {activity.reference ? (
                      <RequestGroupDisplay
                        value={activity.reference as Reference<RequestGroup>}
                        onStart={() => {}}
                        onEdit={() => {}}
                      />
                    ) : (
                      <div className="text-base font-medium text-gray-900">
                        <CodeableConceptDisplay value={activity.detail?.code} />
                      </div>
                    )}
                  </Fragment>
                );
              })}
          </div>
        </div>
      </InfoSection>
    </>
  );
}
