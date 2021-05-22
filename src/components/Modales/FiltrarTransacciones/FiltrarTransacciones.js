import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import Slider from "@material-ui/core/Slider";
import "./FiltrarTransacciones.scss";
import { withStyles } from "@material-ui/core/styles";

function valuetext(value) {
  return `${value}$`;
}

const PrettoSlider = withStyles({
  root: {
    color: "#3EA635",
    height: 8,
  },
})(Slider);

export const FiltrarTransacciones = ({ modalIsOpen, closeModal, setFilter }) => {
  const [valuePrice, setValuePrice] = React.useState([0, 1000000]);
  const [valueAmount, setValueAmount] = React.useState(0);
  const [valueDeliveryPoint, setValueDeliveryPoint] = React.useState("");
  const [valueValidityDate, setValueValidityDate] = React.useState("");
  const [valueValidityTime, setValueValidityTime] = React.useState("");
  const [valueDeliveryDaysDate, setValueDeliveryDaysDate] = React.useState("");
  const [valueDeliveryDaysTime, setValueDeliveryDaysTime] = React.useState("");
  const [valueConditionsPay, setValueConditionsPay] = React.useState("");
  const [valueModality, setValueModality] = React.useState("");
  const [valueCity, setValueCity] = React.useState("");
  const [valueCompany, setValueCompany] = React.useState("");

  const handleChangeSlider = (event, newValue) => {
    setValuePrice(newValue);
  }; 

  const handleChange = (event, field) => {
    switch (field) {
      case "Amount":
        setValueAmount(event.target.value);
        break;

      case "DeliveryPoint":
        setValueDeliveryPoint(event.target.value);
        break;

      case "ValidityDate":
        setValueValidityDate(event.target.value);
        break;

      case "ValidityTime":
        setValueValidityTime(event.target.value);
        break;

      case "DeliveryDaysDate":
        setValueDeliveryDaysDate(event.target.value);
        break;

      case "DeliveryDaysTime":
        setValueDeliveryDaysTime(event.target.value);
        break;

      case "ConditionsPay":
        setValueConditionsPay(event.target.value);
        break;

      case "Modality":
        setValueModality(event.target.value);
        break;

      case "City":
        setValueCity(event.target.value);
        break;

      case "Company":
        setValueCompany(event.target.value);
        break;
    }
  };

  const submitFilter = () => {
    const payload = {
      valuePrice,
      valueAmount,
      valueDeliveryPoint,
      valueValidityDate,
      valueValidityTime,
      valueDeliveryDaysDate,
      valueDeliveryDaysTime,
      valueConditionsPay,
      valueModality,
      valueCity,
      valueCompany,
    };

    setFilter(payload);
    closeModal();
  };

  return (
    <ModalWrapper modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <div className="modal-container">
        <h3 className="header-underline-1">Filtrar ofertas</h3>

        <label>Precio</label>
        <PrettoSlider
          value={valuePrice}
          onChange={handleChangeSlider}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
        <div className="flex items-center justify-between gap-10">
          <div className="custom-input-group">
            <label className="custom-label">Cantidad</label>
            <input value={valueAmount} onChange={(e) => handleChange(e, "Amount")} className="custom-input" />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Punto de entrega</label>
            <select
              value={valueDeliveryPoint}
              onChange={(e) => handleChange(e, "DeliveryPoint")}
              className="custom-input"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="custom-input-group">
            <label className="custom-label">Vigencia de la oferta</label>
            <div className="flex items-center justify-between gap-4">
              <input
                value={valueValidityDate}
                type="date"
                onChange={(e) => handleChange(e, "ValidityDate")}
                className="custom-input"
              />
              <input
                value={valueValidityTime}
                type="time"
                onChange={(e) => handleChange(e, "ValidityTime")}
                className="custom-input"
              />
            </div>
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Días de entrega</label>
            <div className="flex items-center justify-between gap-4">
              <input
                value={valueDeliveryDaysDate}
                type="date"
                onChange={(e) => handleChange(e, "DeliveryDaysDate")}
                className="custom-input"
              />
              <input
                value={valueDeliveryDaysTime}
                type="time"
                onChange={(e) => handleChange(e, "DeliveryDaysTime")}
                className="custom-input"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="custom-input-group">
            <label className="custom-label">Condiciones de pago</label>
            <input
              value={valueConditionsPay}
              onChange={(e) => handleChange(e, "ConditionsPay")}
              className="custom-input"
            />
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Modalidad contractual</label>
            <select value={valueModality} onChange={(e) => handleChange(e, "Modality")} className="custom-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="custom-input-group">
            <label className="custom-label">Ciudad</label>
            <select value={valueCity} onChange={(e) => handleChange(e, "City")} className="custom-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="custom-input-group">
            <label className="custom-label">Empresa</label>
            <select value={valueCompany} onChange={(e) => handleChange(e, "Company")} className="custom-input">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between gap-10 mt-4">
          <button onClick={() => closeModal()} className="btn btn-3 i-w-full" variant="contained">
            Cancelar
          </button>
          <button onClick={() => submitFilter()} className="btn btn-1 i-w-full" variant="contained">
            Filtrar
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};
