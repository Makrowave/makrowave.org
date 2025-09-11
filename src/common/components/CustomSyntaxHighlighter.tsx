import SyntaxHighlighter, {
  type SyntaxHighlighterProps,
} from 'react-syntax-highlighter';
import { nightOwl as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const CustomSyntaxHighlighter = (props: SyntaxHighlighterProps) => {
  const { children, ...rest } = props;

  return (
    <SyntaxHighlighter
      language="tsx"
      style={codeStyle}
      {...rest}
      showLineNumbers
      customStyle={{
        borderRadius: '10px',
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export default CustomSyntaxHighlighter;
