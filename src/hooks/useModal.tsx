import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hook/hook';
import { callModal } from '../store/modalSlice/modalSlice';
import Portal from '../components/Portal/Portal';
import { modalSelector } from '../store/modalSlice/modal-selectors/modal-selectors';

interface AbstractModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export const useModal = <ModalProps extends AbstractModalProps>(
  name: string,
  Modal: React.FC<ModalProps>
): [React.FC<ModalProps>, () => void, () => void, boolean] => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector(modalSelector(name));

  const onOpen = () => dispatch(callModal({ name, isOpen: true }));

  const onClose = () => {
    dispatch(callModal({ name, isOpen: false }));
  };

  const WithPortal: React.FC<ModalProps> = (props: ModalProps) => (
    <>{isOpen && <Portal>{<Modal {...props} />}</Portal>}</>
  );

  return [WithPortal, onClose, onOpen, isOpen];
};
