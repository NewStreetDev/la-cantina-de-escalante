import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import "../../index.css";
import { Schedule } from "./Schedule";

export default function ModalOpenClose({ t }) {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let horaActual = hours + ":" + minutes;
  let day = date.getDay();
  const inicio = day + "HoraInicio";
  const fin = day + "HoraFin";

  const horario = Schedule;
  if (horario == null) {
    return;
  }
  let open = false;
  if (horaActual > horario[inicio]) {
    if (horaActual < horario[fin]){
      open = true;
    }
    else if (horario[fin] < "03:00" && horaActual < "26:00"){
      open = true;
    }
  }
  if (horario[fin] > "00:00" && horario[fin] < "03:00") {
    if (horaActual > "00:00" && horaActual < horario[fin]){
      open=true;
    }
  }
  return (
    <div className={open ? "CardSchedule-open-close active" : "CardSchedule-open-close "}>
      {open ? (
        <FaCheckCircle className="iconOP-open-close" />
      ) : (
        <FaTimesCircle className="iconOP-open-close" />
      )}
      <h3 className="EstadoLocal-open-close">
        {open ? `${t("ModalOpenClose.open")}` : `${t("ModalOpenClose.close")}`}
      </h3>
    </div>
  );
}
