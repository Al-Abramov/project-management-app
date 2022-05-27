import style from '../ColumnHeader/ColumnHeader.module.scss';

interface ColumnTitleProps {
  title: string;
  handleTitleClick: () => void;
}

export const ColumnTitle: React.FC<ColumnTitleProps> = (props) => {
  return (
    <h4 className={style.columnHeaderTitle} onClick={props.handleTitleClick}>
      {props.title}
    </h4>
  );
};
