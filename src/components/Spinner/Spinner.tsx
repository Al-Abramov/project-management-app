import { CircularProgress } from '@mui/material';
import style from './Spinner.module.scss';

interface SpinnerProps {
  size: number;
}

export const LoadSpinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className={style.cover}>
      <CircularProgress
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        size={props.size}
      />
    </div>
  );
};
