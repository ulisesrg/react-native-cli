export const BasicTypes = () => {
  const name: string = 'Fernando';
  const age: number = 37;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];

  powers.push('Next');

  return (
    <>
      <div>Tipos básicos</div>

      { name } { age } { isActive ? 'true' : 'false'}
      <br />

      { powers.join(', ') }
    </>
  )
}
