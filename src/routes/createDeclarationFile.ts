import ts from "typescript";

export const createDeclarationFile = () => {
  return [
    ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            false,
            undefined,
            ts.factory.createIdentifier("Config")
          ),
          ts.factory.createImportSpecifier(
            false,
            undefined,
            ts.factory.createIdentifier("Router")
          ),
        ])
      ),
      ts.factory.createStringLiteral("ziggy-js"),
      undefined
    ),
    ts.factory.createImportDeclaration(
      undefined,
      ts.factory.createImportClause(
        false,
        undefined,
        ts.factory.createNamedImports([
          ts.factory.createImportSpecifier(
            false,
            undefined,
            ts.factory.createIdentifier("RouteParams")
          ),
        ])
      ),
      ts.factory.createStringLiteral("./param"),
      undefined
    ),
    ts.factory.createTypeAliasDeclaration(
      undefined,
      ts.factory.createIdentifier("CustomRouter"),
      [
        ts.factory.createTypeParameterDeclaration(
          undefined,
          ts.factory.createIdentifier("T"),
          undefined,
          undefined
        ),
      ],
      ts.factory.createIntersectionTypeNode([
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Router"),
          undefined
        ),
        ts.factory.createTypeLiteralNode([
          ts.factory.createGetAccessorDeclaration(
            undefined,
            ts.factory.createIdentifier("params"),
            [],
            ts.factory.createIndexedAccessTypeNode(
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("RouteParams"),
                undefined
              ),
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("T"),
                undefined
              )
            ),
            undefined
          ),
        ]),
      ])
    ),
    ts.factory.createModuleDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
      ts.factory.createIdentifier("global"),
      ts.factory.createModuleBlock([
        ts.factory.createFunctionDeclaration(
          [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
          undefined,
          ts.factory.createIdentifier("route"),
          [
            ts.factory.createTypeParameterDeclaration(
              undefined,
              ts.factory.createIdentifier("T"),
              ts.factory.createTypeOperatorNode(
                ts.SyntaxKind.KeyOfKeyword,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("RouteParams"),
                  undefined
                )
              ),
              undefined
            ),
          ],
          [],
          ts.factory.createTypeReferenceNode(
            ts.factory.createIdentifier("CustomRouter"),
            [
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("T"),
                undefined
              ),
            ]
          ),
          undefined
        ),
        ts.factory.createFunctionDeclaration(
          [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
          undefined,
          ts.factory.createIdentifier("route"),
          [
            ts.factory.createTypeParameterDeclaration(
              undefined,
              ts.factory.createIdentifier("T"),
              ts.factory.createTypeOperatorNode(
                ts.SyntaxKind.KeyOfKeyword,
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("RouteParams"),
                  undefined
                )
              ),
              undefined
            ),
          ],
          [
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              ts.factory.createIdentifier("name"),
              undefined,
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("T"),
                undefined
              ),
              undefined
            ),
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              ts.factory.createIdentifier("params"),
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              ts.factory.createIndexedAccessTypeNode(
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("RouteParams"),
                  undefined
                ),
                ts.factory.createTypeReferenceNode(
                  ts.factory.createIdentifier("T"),
                  undefined
                )
              ),
              undefined
            ),
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              ts.factory.createIdentifier("absolute"),
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              ts.factory.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword),
              undefined
            ),
            ts.factory.createParameterDeclaration(
              undefined,
              undefined,
              ts.factory.createIdentifier("config"),
              ts.factory.createToken(ts.SyntaxKind.QuestionToken),
              ts.factory.createTypeReferenceNode(
                ts.factory.createIdentifier("Config"),
                undefined
              ),
              undefined
            ),
          ],
          ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
          undefined
        ),
      ]),
      ts.NodeFlags.ExportContext |
        ts.NodeFlags.GlobalAugmentation |
        ts.ModifierFlags.Ambient |
        ts.NodeFlags.ContextFlags
    ),
    ts.factory.createModuleDeclaration(
      [ts.factory.createModifier(ts.SyntaxKind.DeclareKeyword)],
      ts.factory.createStringLiteral("vue"),
      ts.factory.createModuleBlock([
        ts.factory.createInterfaceDeclaration(
          undefined,
          ts.factory.createIdentifier("ComponentCustomProperties"),
          undefined,
          undefined,
          [
            ts.factory.createPropertySignature(
              undefined,
              ts.factory.createIdentifier("route"),
              undefined,
              ts.factory.createIntersectionTypeNode([
                ts.factory.createParenthesizedType(
                  ts.factory.createFunctionTypeNode(
                    [
                      ts.factory.createTypeParameterDeclaration(
                        undefined,
                        ts.factory.createIdentifier("T"),
                        ts.factory.createTypeOperatorNode(
                          ts.SyntaxKind.KeyOfKeyword,
                          ts.factory.createTypeReferenceNode(
                            ts.factory.createIdentifier("RouteParams"),
                            undefined
                          )
                        ),
                        undefined
                      ),
                    ],
                    [],
                    ts.factory.createTypeReferenceNode(
                      ts.factory.createIdentifier("CustomRouter"),
                      [
                        ts.factory.createTypeReferenceNode(
                          ts.factory.createIdentifier("T"),
                          undefined
                        ),
                      ]
                    )
                  )
                ),
                ts.factory.createParenthesizedType(
                  ts.factory.createFunctionTypeNode(
                    [
                      ts.factory.createTypeParameterDeclaration(
                        undefined,
                        ts.factory.createIdentifier("T"),
                        ts.factory.createTypeOperatorNode(
                          ts.SyntaxKind.KeyOfKeyword,
                          ts.factory.createTypeReferenceNode(
                            ts.factory.createIdentifier("RouteParams"),
                            undefined
                          )
                        ),
                        undefined
                      ),
                    ],
                    [
                      ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        ts.factory.createIdentifier("name"),
                        undefined,
                        ts.factory.createTypeReferenceNode(
                          ts.factory.createIdentifier("T"),
                          undefined
                        ),
                        undefined
                      ),
                      ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        ts.factory.createIdentifier("params"),
                        ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                        ts.factory.createIndexedAccessTypeNode(
                          ts.factory.createTypeReferenceNode(
                            ts.factory.createIdentifier("RouteParams"),
                            undefined
                          ),
                          ts.factory.createTypeReferenceNode(
                            ts.factory.createIdentifier("T"),
                            undefined
                          )
                        ),
                        undefined
                      ),
                      ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        ts.factory.createIdentifier("absolute"),
                        ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                        ts.factory.createKeywordTypeNode(
                          ts.SyntaxKind.BooleanKeyword
                        ),
                        undefined
                      ),
                      ts.factory.createParameterDeclaration(
                        undefined,
                        undefined,
                        ts.factory.createIdentifier("config"),
                        ts.factory.createToken(ts.SyntaxKind.QuestionToken),
                        ts.factory.createTypeReferenceNode(
                          ts.factory.createIdentifier("Config"),
                          undefined
                        ),
                        undefined
                      ),
                    ],
                    ts.factory.createKeywordTypeNode(
                      ts.SyntaxKind.StringKeyword
                    )
                  )
                ),
              ])
            ),
          ]
        ),
      ]),
      ts.NodeFlags.ExportContext |
        ts.ModifierFlags.Ambient |
        ts.NodeFlags.ContextFlags
    ),
  ];
};