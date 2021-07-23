import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttributesService } from './attributes.service';
import { Attribute } from './entities/attribute.entity';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { FindManyOptions } from 'typeorm';

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
  findAll(params: FindManyOptions<Attribute> = {}) {
    return this.attributesService.findAll(params);
  }

  @Query(() => Attribute, { name: 'attribute' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributesService.findOne({ where: { id } });
  }

  @Mutation(() => [Attribute])
  updateMultiAttributes(
    @Args('updateAttributesInput', { type: () => [UpdateAttributeInput] })
    attributesInput: UpdateAttributeInput[],
  ) {
    return attributesInput.map(async (attribute) => {
      const newAttribute = this.updateAttribute(attribute);
      return newAttribute;
    });
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
