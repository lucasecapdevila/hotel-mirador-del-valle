import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Habitaciones = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/detalleHabitacion/:id"
        element={<DetalleHabitacion></DetalleHabitacion>}
      ></Route>
    </BrowserRouter>
  );
};

export default Habitaciones;
