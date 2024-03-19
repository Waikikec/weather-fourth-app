import { Container, colors } from "@mui/material";
import Forecast from "./components/Forecast";
import SearchInput from "./components/SearchInput";
import useForecast from "./hooks/useForecast";

function App() {

  const { forecast, options, userInput, onOptionSelect, onSubmit, onInputChange } = useForecast();

  return (
    <Container
      sx={{
        backgroundColor: colors.grey[300],
        maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
        width: '100%',
        height: '100%',
        margin: '0 auto',
        padding: '1rem 0 3rem',
        marginBottom: '1rem',
        borderRadius: {
          xs: 'none',
          sm: '0 0 1rem 1rem',
        },
        boxShadow: {
          xs: 'none',
          sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
        },
      }}
    >
      <SearchInput
        userInput={userInput}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />

      {forecast
        ? <Forecast data={forecast} />
        : <h3>No access to your location</h3>
      }

    </Container>
  );
}

export default App;
