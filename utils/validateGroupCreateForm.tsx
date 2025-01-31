import {Alert} from "react-native";

type FormState = {
  title: string;
  location: string;
  description: string;
  time: Date;
  category: string[];
  participantLimit?: number;
};

const validationSchema: Record<
  keyof FormState,
  {validator: (value: any) => boolean; message: string}
> = {
  title: {
    validator: (value: string) => !!value.trim(),
    message: "Title field must not be empty",
  },
  location: {
    validator: (value: string) => !!value.trim(),
    message: "Location field must not be empty",
  },
  description: {
    validator: (value: string) => !!value.trim(),
    message: "Description field must not be empty",
  },
  time: {
    validator: (value: Date) => value instanceof Date && !isNaN(value.getTime()),
    message: "Date field must be a valid date",
  },
  category: {
    validator: (value: string[]) => Array.isArray(value) && value.length > 0,
    message: "Must select at least one category tag",
  },
  participantLimit: {
    // validator: (value?: number) => value === undefined || (Number.isInteger(value) && value > 0),
    validator: (value: number) => true,
    message: "Participant limit must be a positive integer",
  },
};

export function validateGroupCreateForm (fields: FormState, callback: () => void) {
  for(const [key, value] of Object.entries(fields) as [keyof FormState, any][]) {
    const schema = validationSchema[key];
    if(schema && !schema.validator(value)) {
      Alert.alert(schema.message);
      return;
    }
  }

  callback();
}
