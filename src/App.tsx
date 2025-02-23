import React from 'react';
import Button from './components/Button';
import Label from './components/Label';
import Text from './components/Text';
import Table from './components/Table';
import Dropdown from './components/Dropdown';
import RadioButton from './components/RadioButton';
import Img from './components/Img';
import HeroImage from './components/HeroImage';
import Card from './components/Card';

import './App.css';
import { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <h1>Welcome to My UI Component Library</h1>
        <div className="container">
          {/* Button Component */}
          <Button label="Click Me!" onClick={() => alert('Button clicked!')} />

          {/* Label Component */}
          <Label text="This is a Label" />

          {/* Text Component */}
          <Text fontSize="16px" fontWeight="bold" color="blue" disabled={false}>
          "Innovation thrives where curiosity meets perseverance. Every small step forward, every lesson learned, and every challenge overcome shapes a future filled with possibility. Keep building, keep creating, and let your work inspire the world." ✨
          </Text>

          {/* Table Component */}
          <Table
            tableHeader={[
              { text: 'Product Name', color: 'black' },
              { text: 'Price', color: 'black' },
            ]}
            tableRows={[
              [
                { text: 'Denim Jacket', color: 'blue' },
                { text: '$49.99', color: 'blue' },
              ],
              [
                { text: 'Floral Dress', color: 'green' },
                { text: '$39.67', color: 'green' },
              ],
            ]}
            tableFooter={[
              { text: 'Total', color: 'black' },
              { text: '$89.66', color: 'black' },
            ]}
          />

          {/* Dropdown Component */}
          <Dropdown
            items={[
              { label: 'Go Swimming', value: 'option1' },
              { label: 'Play Golf', value: 'option2' },
              { label: 'Watch Netflix', value: 'option3' },
            ]}
            disabled={false}
          />

          {/* Radio Button Component */}
          <RadioButton
          items={[
          { label: 'Visa', value: 'option1' },
          { label: 'Amex', value: 'option2' },
          { label: 'Mastercard', value: 'option3' },
           ]}
           disabled={false}
          />

          {/* Image Component */}
          <Img src="/Image.jpg" alt="example" />

          {/* Hero Image Component */}
          <HeroImage src="MyImage.jpg" alt="hero" text="Hero image text" />

          {/* Card Component */}
          <Card
            imageSrc="/Birthday.jpg"
            title="Card Title"
            description="Card description"
            disabled={false}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
