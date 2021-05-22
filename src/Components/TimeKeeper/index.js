import React, { useState } from "react";
import { connect } from "react-redux";
import TimeKeeper from "react-timekeeper";
import { hideTimeKeeper } from "../../state/TimePicker/action";

function TimeSelector(props) {
  const [time, setTime] = useState("11:11");

  return (
    <div>
      <TimeKeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted24)}
        onDoneClick={() => {
          props.parentCallBack(time, props.appointment);
          props.hideTimeKeeer();
        }}
        switchToMinuteOnHourSelect
      />
      )
    </div>
  );
}

const mapStatetoProps = (state) => ({
  appointment: state.toggleTimeKeeper.appointment_number,
});

const mapDispatchToProps = (dispatch) => ({
  hideTimeKeeer: () => dispatch(hideTimeKeeper()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(TimeSelector);
