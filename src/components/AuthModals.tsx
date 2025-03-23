
import React, { useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface AuthModalsProps {
  initialMode?: 'signin' | 'signup';
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModals = ({ initialMode = 'signin', isOpen, onOpenChange }: AuthModalsProps) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  
  const switchToSignIn = () => setMode('signin');
  const switchToSignUp = () => setMode('signup');
  
  return (
    <>
      <SignInForm 
        isOpen={isOpen && mode === 'signin'} 
        onOpenChange={onOpenChange}
        onSwitchToSignUp={switchToSignUp}
      />
      
      <SignUpForm 
        isOpen={isOpen && mode === 'signup'} 
        onOpenChange={onOpenChange}
        onSwitchToSignIn={switchToSignIn}
      />
    </>
  );
};
