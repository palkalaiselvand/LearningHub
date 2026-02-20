declare module 'mammoth' {
  interface ConvertResult {
    value: string;
  }

  interface InputLike {
    arrayBuffer: ArrayBuffer;
  }

  function convertToHtml(input: InputLike): Promise<ConvertResult>;

  const mammoth: {
    convertToHtml: typeof convertToHtml;
  };

  export default mammoth;
}
