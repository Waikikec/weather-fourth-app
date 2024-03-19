import { css } from "@emotion/css";
import { OptionType } from "../types/types";

const suggestionsClass = css({
  position: 'absolute',
  backgroundColor: 'white',
  top: 55,
  left: 40,
  minWidth: 200,
  listStyle: 'none',
  margin: 0,
  padding: 0,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
});

const buttonClass = css({
  padding: 12,
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'lightcoral',
  },
});

type componentProps = {
  options: []
  onSelect: (option: OptionType) => void
}

const Suggestions = ({ options, onSelect }: componentProps) => (
  <ul className={suggestionsClass}>
    {options.map((option: OptionType, index: number) => (
      <li key={option.name + '-' + index}>
        <button
          className={buttonClass}
          onClick={() => onSelect(option)}
        >
          {option.name}, {option.country}
        </button>
      </li>
    ))}
  </ul>
)

export default Suggestions