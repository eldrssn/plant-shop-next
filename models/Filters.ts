import mongoose, { Schema } from 'mongoose';

export type Variant = {
  title: string;
  slug: string;
};

export type Filter = {
  title: string;
  slug: string;
  variants: Variant[];
};

const VariantSchema = new Schema<Variant>(
  {
    title: String,
    slug: String,
  },
  { _id: false } 
);

const FilterSchema = new Schema<Filter>(
  {
    title: String,
    slug: String,
    variants: [VariantSchema],
  },
  {
    timestamps: true,
    collection: 'filters',
  }
);

const FilterModel =
  mongoose.models.Filter || mongoose.model<Filter>('Filter', FilterSchema);

export default FilterModel;
