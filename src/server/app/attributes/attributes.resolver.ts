import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributesService } from './attributes.service';
import { Attribute } from './entities/attribute.entity';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';

@Resolver(() => Attribute)
export class AttributesResolver {
  constructor(private readonly attributesService: AttributesService) {}

  @Mutation(() => Attribute)
  createAttribute(
    @Args('createAttributesInput')
    attribute: CreateAttributeInput,
  ) {
    return this.attributesService.findOrCreate(attribute);
  }

  @Mutation(() => [Attribute])
  createMultiAttributes(
    @Args('createAttributesInput', { type: () => [CreateAttributeInput] })
    attributesInput: CreateAttributeInput[],
  ) {
    return attributesInput.map(async (attribute) => {
      const newAttribute = this.createAttribute(attribute);
      return newAttribute;
    });
  }

  @Query(() => [Attribute], { name: 'attributes' })
  findAll() {
    return this.attributesService.findAll();
  }

  @Query(() => Attribute, { name: 'attribute' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributesService.findOne({ where: { id } });
  }

  @Mutation(() => Attribute)
  updateAttribute(
    @Args('updateAttributeInput') updateAttributeInput: UpdateAttributeInput,
  ) {
    return this.attributesService.update(
      updateAttributeInput.id,
      updateAttributeInput,
    );
  }

  @Mutation(() => Attribute)
  removeAttribute(@Args('id', { type: () => Int }) id: number) {
    return this.attributesService.remove(id);
  }
}
