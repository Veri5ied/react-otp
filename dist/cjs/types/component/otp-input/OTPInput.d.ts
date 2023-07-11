import React from "react";
export type OTPInputProps = {
    value: string;
    valueLength: number;
    onChange: (value: string) => void;
    className?: string;
};
export default function OtpInput({ value, valueLength, onChange, className, }: OTPInputProps): React.JSX.Element;
