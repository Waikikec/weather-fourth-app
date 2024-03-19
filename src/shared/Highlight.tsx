import { css } from "@emotion/css";
import CustomIcon from "./CustomIcon";

const containerClass = css({
  backgroundColor: 'white',
  borderRadius: 25,
  padding: 24,
  margin: 12,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 120,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
})

const titleClass = css({
  fontSize: '1rem',
  fontWeight: '300',
});

const lineClass = css({
  display: 'flex',
  flexDirection: 'row',
  padding: 12,
  fontWeight: '600'
});

const descriptionClass = css({
  fontSize: '0.85rem',
  fontWeight: '300',
});

interface Props {
  icon: string;
  title: string;
  line1: string | JSX.Element;
  line2?: string | JSX.Element;
  description?: string | JSX.Element;
}

const Highlight = ({ icon, title, line1, line2, description }: Props) => {
  return (
    <div className={containerClass}>
      <CustomIcon
        size={1}
        path={icon}
      />

      <h4 className={titleClass}>{title}</h4>

      <span className={lineClass}>{line1}</span>

      {line2 && <span className={lineClass}>{line2}</span>}

      <p className={descriptionClass}>{description}</p>
    </div>
  )
}

export default Highlight