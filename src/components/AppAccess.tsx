// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Group, Button, TextInput } from '@mantine/core';
// import { useForm } from '@mantine/form';
// import { NumberInput, TextInput, Button, Box } from '@mantine/core';


// export default function AppAccess() {
//   const [opened, { open, close }] = useDisclosure(false);
//   const form = useForm({
//     initialValues: { name: '', email: '', age: 0 },

//     // functions will be used to validate values at corresponding key
//     validate: {
//       name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
//       age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
//     },
//   });


//   return (
//     <>
//       <Modal opened={opened} onClose={close} title="Connect.." 
//       classNames={{body: "text-white app-grad", header: "!text-white app-grad"}}
//       className="text-white !bg-violet-800 !bg-opacity-0 hover:!bg-opacity-30 transition-all duration-300 font-medium rounded">

//     <Box maw={320} mx="auto">
//       <form onSubmit={form.onSubmit(console.log)}>
//         <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
//         <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
//         <NumberInput
//           mt="sm"
//           label="Age"
//           placeholder="Age"
//           min={0}
//           max={99}
//           {...form.getInputProps('age')}
//         />
//         <Button type="submit" mt="sm">
//           Submit
//         </Button>
//       </form>
//     </Box>
//         {/* <TextInput 

//         classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
//         label="Subdomain" placeholder="Subdomain" />
//         <TextInput
//         classNames={{input:"bg-violat-100 bg-opacity-10", label:"text-white"}}
//           data-autofocus
//           label="API Key"
//           placeholder=""
//           mt="md"
//         /> */}
//       </Modal>

//       <Group position="center">
//         <Button className="app-btn" onClick={open}>Connect</Button>
//       </Group>
//     </>
//   );
// }