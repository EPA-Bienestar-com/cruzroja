import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const ActionItems = lazy(() => import('./ActionItems'));
const ActionItem = lazy(() => import('./ActionItem'));

export const sideMenu = {
  title: 'Plan de Atención',
  menu: [{ name: 'Acción', href: '/care-plan/action-items' }],
};

export default function CarePlan(): JSX.Element {
  return (
    <PageLayout sideMenu={sideMenu}>
      <Routes>
        <Route index element={<Navigate replace to={sideMenu.menu[0].href} />} />

        <Route path="action-items" element={<ActionItems />} />
        <Route path="action-items/:itemId" element={<ActionItem />} />
      </Routes>
    </PageLayout>
  );
}
