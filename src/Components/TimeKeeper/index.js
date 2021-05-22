import React, { useState } from "react";
import { connect } from "react-redux";
import TimeKeeper from "react-timekeeper";
import {hideTimeKeeper} from '../../state/TimePicker/action'

function TimeSelector(props) {
  const [time, setTime] = useState("12:00pm");

  return (
    <div>
      <TimeKeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted12)}
        onDoneClick={() => props.hideTimeKeeer()}
        switchToMinuteOnHourSelect
      />
      )
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  hideTimeKeeer: () => dispatch(hideTimeKeeper()),
});

export default connect(null, mapDispatchToProps)(TimeSelector);
