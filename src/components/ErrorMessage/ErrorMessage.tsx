import {FC, memo} from 'react';

import './error-message-style.scss';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({error}) => {
  if (!error) {
    return null;
  }

  return (
    <div className='error-text-container'>
      <img className='error-icon' src="public/assets/error.png" />
      <span className='error-text'>{error}</span>
    </div>
  );
};

export default memo(ErrorMessage);
