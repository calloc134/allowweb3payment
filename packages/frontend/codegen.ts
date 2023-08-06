import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.SCHEMA_PATH,
  documents: process.env.OPERATION_PATH,
  generates: {
    "src/lib/generated/dummy.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-urql",
        // "typescript-validation-schema"
      ],
      config: {
        strictScalars: true,
        scalars: {
          UUID: "string",
        },
        enumsAsTypes: true,
        skipTypename: true,
        useTypeImports: true,
        // schema: "zod",
        // scalarSchemas: {
        //   UUID: "z.string().uuid()",
        // },
      },
    },
  },
};

export default config;
