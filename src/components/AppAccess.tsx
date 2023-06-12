import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Modal, Group, NumberInput, TextInput, Button, Box, Transition } from '@mantine/core';


export default function AppAccess() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: { subdomain: '', apikey: '' },

    // functions will be used to validate values at corresponding key
    // validate: {
    //   name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });


  return (
    <>

      <Modal 

      opened={opened} onClose={close} title="Connect.." 
      classNames={{root: "rounded", body: "text-white app-grad", header: "!text-white app-grad"}}
      className="text-white !bg-violet-800 !bg-opacity-0 hover:!bg-opacity-30 transition-all duration-300 font-medium rounded">

    <Box maw={320} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        <TextInput label="" placeholder="Daftra Sub-domain" {...form.getInputProps('subdomain')}
        classNames={{input: "text-white !transittion-all !duration-400 bg-white/10 placeholder:text-white/60 placeholder:font-normal border-1  !border-violet-100/70 focus:!border-violet-100/100"}} />
        <TextInput label="" placeholder="Your API Key" {...form.getInputProps('apikey')}
        classNames={{input: "text-white my-5 !transittion-all !duration-400 bg-white/10 placeholder:text-white/60 placeholder:font-normal border-1  !border-violet-100/70 focus:!border-violet-100/100"}} />
       
        <Button type="submit" mt="sm" className='app-btn !bg-violet-200/10 hover:!bg-violet-200/20 m-0'>
          Submit
        </Button>
      </form>
    </Box>
        {/* <TextInput 

        classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
        label="Subdomain" placeholder="Subdomain" />
        <TextInput
        classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
          data-autofocus
          label="API Key"
          placeholder=""
          mt="md"
        /> */}
      </Modal>

      <Group position="center">
        <Button className="app-btn-connect" onClick={open}>Connect</Button>
      </Group>
    </>
  );
}