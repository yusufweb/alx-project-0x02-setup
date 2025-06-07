import React from 'react';
import Header from '../components/layout/Header'; // Assuming you have a Header component
import Button from '../components/common/Button'; // Import the new Button component

const AboutPage: React.FC = () => {
  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          This page provides information about our company/project. We are dedicated to providing excellent service and innovative solutions.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Explore Our Buttons!</h2>
        <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-8 justify-center">
          {/* Small, Rounded-sm Button */}
          <Button
            size="small"
            shape="rounded-sm"
            onClick={() => handleButtonClick('Small Squared')}
            className="shadow-md"
          >
            Small Squared
          </Button>

          {/* Medium, Rounded-md Button */}
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => handleButtonClick('Medium Default')}
            className="shadow-lg"
          >
            Medium Default
          </Button>

          {/* Large, Rounded-full Button */}
          <Button
            size="large"
            shape="rounded-full"
            onClick={() => handleButtonClick('Large Round')}
            className="shadow-xl"
          >
            Large Round
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;