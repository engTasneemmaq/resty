import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from '../App';



test('load and disply App', async()=>{
  render(<App/>);
  const labelTest = await waitFor(()=> screen.getByTestId("testLabel"));
  const urlTest = await waitFor(()=> screen.getByTestId("testUrl"));

expect(labelTest).toHaveTextContent("URL: GO!");
expect(urlTest).toHaveTextContent("URL:");
});


test("Test Methods", async ()=>{
  render (<App/>);
const buttonTest = await waitFor(()=> screen.getByTestId("go"));
const spanGet = await waitFor(()=> screen.getByTestId("getTest"));

fireEvent.click(buttonTest);
expect(spanGet).toHaveTextContent("GET");

});


