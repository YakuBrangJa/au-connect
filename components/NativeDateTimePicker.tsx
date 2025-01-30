import DateTimePicker from "@react-native-community/datetimepicker";
import React, {ComponentProps} from "react";

const NativeDateTimePicker = React.memo((props: ComponentProps<typeof DateTimePicker>) => <DateTimePicker {...props} />)

export default NativeDateTimePicker