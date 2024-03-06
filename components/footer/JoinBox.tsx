import { SingUpForm } from './SingUpForm';

const JoinBox = () => (
  <section
    className="max-w-[300px] md:max-w-[350px] flex flex-col text-center m-auto pb-8 md:basis-1/3 md:order-1"
    id="join-us"
  >
    <h2 className="mb-4 font-bold">Join Patch</h2>
    <p className="mb-6 text-sm">
      Sign up for our free video course and urban garden inspiration
    </p>
    <SingUpForm />
  </section>
);

export { JoinBox };
