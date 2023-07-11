import React from 'react';

type OTPInputProps = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
    className?: string;
};
declare function OtpInput({ value, valueLength, onChange, className, }: OTPInputProps): React.JSX.Element;

export { OtpInput as OTPInput };
