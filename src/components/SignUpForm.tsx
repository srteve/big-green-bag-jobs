
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface SignUpFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignIn: () => void;
}

export const SignUpForm = ({ isOpen, onOpenChange, onSwitchToSignIn }: SignUpFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const { signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setIsSubmitting(true);

    try {
      if (!name || !email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters');
      }

      await signUp(email, password, name);
      
      toast({
        title: "Welcome to Big Green Bag!",
        description: "Your account has been successfully created.",
      });
      
      onOpenChange(false);
      navigate('/profile');
    } catch (error) {
      setFormError((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Create an Account</DialogTitle>
          <DialogDescription>
            Join Big Green Bag to find your next ecommerce opportunity.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          {formError && (
            <Alert variant="destructive">
              <AlertDescription>{formError}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            <p className="text-xs text-bgb-500">
              Must be at least 8 characters
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-candy hover:opacity-90 transition-opacity"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
          
          <div className="text-center text-sm mt-4">
            <span className="text-bgb-600">Already have an account? </span>
            <button 
              type="button"
              onClick={onSwitchToSignIn}
              className="text-nebula hover:underline focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
