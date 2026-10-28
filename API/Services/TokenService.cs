using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using API.Entities;
using API.Interfaces;
using Microsoft.IdentityModel.Tokens;

namespace API.Services;

public class TokenService(IConfiguration config) : ITokenService
{
    public string CreateToken(AppUser user)
    {
        string tokenKey = config["TokenKey"] ?? throw new Exception("The token key cannot be retrieved");
        if (tokenKey.Length < 64) throw new Exception("The token key needs to be at least 64 characters long");
        SymmetricSecurityKey key = new(Encoding.UTF8.GetBytes(tokenKey));
        List<Claim> claims = [new(ClaimTypes.Email, user.Email), new(ClaimTypes.NameIdentifier, user.Id)];
        SigningCredentials credentials = new(key, SecurityAlgorithms.HmacSha512Signature);
        SecurityTokenDescriptor tokenDescriptor = new() { Subject = new ClaimsIdentity(claims), Expires = DateTime.UtcNow.AddDays(7), SigningCredentials = credentials };
        JwtSecurityTokenHandler tokenHandler = new();
        SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}