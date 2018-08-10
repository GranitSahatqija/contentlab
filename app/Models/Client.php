<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
      'first_name',
      'last_name',
      'email',
      'phone',
      'street_address',
      'postal_code',
      'city',
      'canton',
      'company_name',
      'type'
  ];

  public $hidden = ['created_at', 'updated_at'];
}
