using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations;

[DbContext(typeof(AppDbContext))]
[Migration("20261006210528_UserEntityUpdate")]
partial class UserEntityUpdate
{
    protected override void BuildTargetModel(ModelBuilder modelBuilder)
    {
        modelBuilder.HasAnnotation("ProductVersion", "10.0.12");

        modelBuilder.Entity("API.Entities.AppUser", b =>
        {
            b.Property<string>("Id")
                .HasColumnType("TEXT");

            b.Property<string>("DisplayName")
                .IsRequired()
                .HasColumnType("TEXT");

            b.Property<string>("Email")
                .IsRequired()
                .HasColumnType("TEXT");

            b.Property<byte[]>("PasswordHash")
                .IsRequired()
                .HasColumnType("BLOB");

            b.Property<byte[]>("PasswordSalt")
                .IsRequired()
                .HasColumnType("BLOB");

            b.HasKey("Id");

            b.ToTable("Users");
        });
    }
}