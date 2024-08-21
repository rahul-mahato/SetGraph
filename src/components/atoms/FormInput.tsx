import {
  AlertCircleIcon,
  Box,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import React from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  type?: 'password' | 'text';
  defaultValue?: string;
  placeHolder?: string;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  helperText?: string;
  errorText?: string;
  control: any;
  rules?: RegisterOptions;
};

const FormInput: React.FC<Props> = ({
  name,
  label,
  type = 'text',
  defaultValue,
  placeHolder,
  disabled,
  required,
  helperText,
  control,
  rules,
}) => {
  return (
    <Box h="$32">
      <Controller
        control={control}
        name={name}
        rules={rules}
        disabled={disabled}
        render={({ field, fieldState: { invalid, error } }) => (
          <FormControl
            size="md"
            isDisabled={field.disabled}
            isInvalid={invalid}
            isRequired={required}>
            <FormControlLabel mb="$1">
              <FormControlLabelText size="sm">{label}</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type={type}
                defaultValue={defaultValue}
                placeholder={placeHolder}
                onChangeText={field.onChange}
              />
            </Input>
            {helperText && (
              <FormControlHelper>
                <FormControlHelperText>{helperText}</FormControlHelperText>
              </FormControlHelper>
            )}
            {error?.message && (
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>{error?.message}</FormControlErrorText>
              </FormControlError>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default FormInput;
