# @Veri5ied React-otp

Veri5ied React OTP is a lightweight and customizable React component for generating One-Time Passwords (OTP). It simplifies the process of implementing OTP functionality in your React applications.

# Installation

### npm
```
npm i @veri5ied/react-otp
```

### yarn
```
yarn add @veri5ied/react-otp
```

# Usage
To use @veri5ied/react-otp component in your React or Next applications:
```
import OTPInput from "@veri5ied/react-otp"

const AuthFieldSample = () => {
    return (
        <OTPInput value={} valueLength={} className={} onChange={}/>
    )
}
```

- value: A string representing the initial value of the OTP input field. This value will be displayed in the input field
- valueLength: An integer representing the length of the OTP field.
- onChange: Event to retrieve the updated OTP value.

# Customization
@veri5ied/react-otp component can be customized to fit your application's design and requirements. You can apply your own CSS styles to the component by passing a custom className prop and defining corresponding styles in your CSS file.

# Contributing
Contributions to the OTP package are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/Veri5ied/veri5ied-react-otp).

When contributing, make sure to follow the existing coding style and document any changes or additions.
