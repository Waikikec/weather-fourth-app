import { css } from '@emotion/css';
import { mdiMagnify } from '@mdi/js';
import { colors } from '@mui/material';
import { ChangeEvent } from 'react';
import CustomIcon from '../shared/CustomIcon';
import { OptionType } from '../types/types';
import Suggestions from './Suggestions';

const containerClass = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  margin: 10,
});

const inputStyle = css({
  width: '100%',
  height: 30,
  border: 'none',
  borderRadius: 5,
  fontSize: 16,
  fontWeight: 600,
  padding: 10,
  margin: 5,
});

const buttonClass = css({
  background: 'none',
  border: 'none',
  backgroundColor: '#f0f0f0',
  borderRadius: 5,
  padding: '0.8rem 2rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    borderRadius: 5,
    backgroundColor: 'lightcoral',
  },
});

const iconClass = css({
  color: colors.grey[700],
});

type Props = {
  userInput: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: OptionType) => void
  onSubmit: () => void
}

const SearchInput = ({ userInput, options, onInputChange, onOptionSelect, onSubmit }: Props) => {

  return (
    <div className={containerClass}>

      <input
        type="text"
        placeholder='Search for place...'
        className={inputStyle}
        value={userInput}
        onChange={onInputChange}
      />

      <Suggestions
        options={options}
        onSelect={onOptionSelect}
      />

      <button
        className={buttonClass}
        onClick={onSubmit}
      >

        <CustomIcon
          title={'Search'}
          path={mdiMagnify}
          size={1}
          className={iconClass}
        />

      </button>
    </div>
  )
}

export default SearchInput