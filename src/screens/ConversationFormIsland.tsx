'use client';

import React from 'react';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export function ConversationFormIsland() {
  const endpoint = '/form-handler.php';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    alert('Submission received.');
  };

  return (
    <Card className='p-8 conversation-form'>
      <h2 className='mb-6'>Request a Strategy Call</h2>
      <form className='conversation-form__form' onSubmit={handleSubmit}>
        <div className='conversation-form__grid'>
          <div className='conversation-form__field'>
            <Label htmlFor='name'>Full Name *</Label>
            <Input id='name' name='name' placeholder='Your name' required />
          </div>
          <div className='conversation-form__field'>
            <Label htmlFor='email'>Email Address *</Label>
            <Input id='email' name='email' type='email' placeholder='you@company.com' required />
          </div>
          <div className='conversation-form__field'>
            <Label htmlFor='phone'>Phone Number *</Label>
            <Input id='phone' name='phone' type='tel' placeholder='020 1234 5678' required />
          </div>
          <div className='conversation-form__field'>
            <Label htmlFor='business-type'>Business Type *</Label>
            <Select name='businessType'>
              <SelectTrigger id='business-type' name='businessType'>
                <SelectValue placeholder='Select your industry' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='beauty'>Beauty & Personal Care</SelectItem>
                <SelectItem value='other'>Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='conversation-form__field'>
          <Label htmlFor='website'>Current Website (Optional)</Label>
          <Input id='website' name='website' type='url' placeholder='https://yourwebsite.com' />
        </div>

        <div className='conversation-form__field'>
          <Label htmlFor='goals'>What are your main goals? *</Label>
          <Textarea
            id='goals'
            name='goals'
            placeholder='e.g., Get more bookings, improve local SEO, automate follow-ups, reduce no-shows...'
            rows={4}
            required
          />
        </div>

        <div className='conversation-form__field'>
          <Label htmlFor='monthly-budget'>Approximate Monthly Budget</Label>
          <Select name='monthlyBudget'>
            <SelectTrigger id='monthly-budget' name='monthlyBudget'>
              <SelectValue placeholder='Select budget range' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='under-1k'>Under £1,000</SelectItem>
              <SelectItem value='1k-3k'>£1,000 - £3,000</SelectItem>
              <SelectItem value='3k-5k'>£3,000 - £5,000</SelectItem>
              <SelectItem value='5k-10k'>£5,000 - £10,000</SelectItem>
              <SelectItem value='10k-plus'>£10,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <button type='submit' className='btn btn-primary btn-block'>
          Book Strategy Call
        </button>

        <div className='text-center'>
          <p className='text-sm text-muted-foreground'>
            We respect your privacy. We&apos;ll never share your information.
          </p>
        </div>
      </form>
    </Card>
  );
}
