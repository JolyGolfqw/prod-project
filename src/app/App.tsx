import { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import useTheme from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

export default function App () {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={classNames('app', { hover: true }, [theme])}>
      <Suspense fallback="">
        <div>
          <Navbar />
          {/* <button onClick={handleOpen}>open</button> */}
          <Modal isOpen={isOpen} onClose={handleClose}/>
        </div>
        <div className="page-content">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
